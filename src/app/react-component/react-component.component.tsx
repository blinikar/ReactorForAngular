import {
  Component, Input, ViewChild
} from '@angular/core';
import { RealReactComponent } from "src/app/react-component/Component";
import { ReactorReact } from "projects/reactor-for-angular/src/lib/react-wrappers/decorator";

@Component({
  selector: 'react-component-wrapper',
  template: `<span #title>Here will be a component</span>`
})
@ReactorReact()
export class ReactComponentWrapper {
  @ViewChild('title') viewChild: Element = {} as Element;
  @Input() public parameter!: string;

  getElement() {
    return <RealReactComponent parameter={this.parameter} method={() => {}} />
  }
}

