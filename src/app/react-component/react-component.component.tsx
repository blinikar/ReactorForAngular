import {
  Component, Input, ViewChild
} from '@angular/core';
import { RealReactComponent } from "src/app/react-component/Component";
import { ReactWrapperDecorator } from "src/app/react-wrappers/decorator";

@Component({
  selector: 'react-component-wrapper',
  template: `<span #title>Here should be a component</span>`
})
@ReactWrapperDecorator()
export class ReactComponentWrapper {
  @ViewChild('title') viewChild: Element = {} as Element;
  @Input() public parameter!: string;

  getElement() {
    return <RealReactComponent parameter={this.parameter} method={() => {}} />
  }
}

