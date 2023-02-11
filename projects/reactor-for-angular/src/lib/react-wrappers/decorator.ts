import React, { ReactElement } from "react";

// @ts-ignore
import ReactDOM from "react-dom";

export const ReactorReact = () => {
  return <T extends { new (...args: any[]): { getElement: () => ReactElement, viewChild: Element } }>(constructor: T) => {
    const LIFECYCLE_HOOKS = [
      'ngAfterViewInit',
      'ngOnChanges',
      'ngOnDestroy'
    ];

    LIFECYCLE_HOOKS.forEach(hook => {
      const original = constructor.prototype[hook];
      const reactVersion = React.version.split('.')[0];

      switch (hook) {
        case 'ngAfterViewInit':
          constructor.prototype[hook] = function (...args: any[]) {
            if (reactVersion === '18') {
              // @ts-ignore
              this.root = ReactDOM.createRoot(this.viewChild.nativeElement);
              // @ts-ignore
              this.root.render(this.getElement());
            } else {
              // @ts-ignore
              ReactDOM.render(this.getElement(), this.viewChild.nativeElement);
            }
            original && original.apply(this, args);
          }
          break;
        case 'ngOnChanges':
          constructor.prototype[hook] = function (...args: any[]) {
            if (reactVersion === '18') {
              // @ts-ignore
              if (this.root) this.root.render(this.getElement());
            } else {
              // @ts-ignore
              if (this.viewChild.nativeElement) ReactDOM.render(this.getElement(), this.viewChild.nativeElement);
            }
            original && original.apply(this, args);
          }
          break;
        case 'ngOnDestroy':
          constructor.prototype[hook] = function (...args: any[]) {
            if (reactVersion === '18') {
              // @ts-ignore
              this.root.unmount();
            } else {
              // @ts-ignore
              ReactDOM.unmountComponentAtNode(this.viewChild.nativeElement);
            }
            original && original.apply(this, args);
          }
          break;
      }
    });
  }
}
