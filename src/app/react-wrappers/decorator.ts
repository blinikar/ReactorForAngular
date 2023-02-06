import { createRoot } from "react-dom/client";

export const ReactWrapperDecorator = () => {
  return (constructor: any) => {
    const LIFECYCLE_HOOKS = [
      'ngAfterViewInit',
      'ngOnChanges',
      'ngOnDestroy'
    ];

    LIFECYCLE_HOOKS.forEach(hook => {
      const original = constructor.prototype[hook];

      if (hook === 'ngAfterViewInit') {
        constructor.prototype[hook] = function (...args: any[]) {
          this.root = createRoot(this.viewChild.nativeElement);
          this.root.render(this.getElement());
          original && original.apply(this, args);
        }
      } else if (hook === 'ngOnChanges') {
        constructor.prototype[hook] = function (...args: any[]) {
          if (this.root) this.root.render(this.getElement());
          original && original.apply(this, args);
        }
      } else if (hook === 'ngOnDestroy') {
        constructor.prototype[hook] = function (...args: any[]) {
          this.root.unmount();
          original && original.apply(this, args);
        }
      }
    });
  }
}
