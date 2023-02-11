# ReactorForAngular

This is development repository for ReactorForAngular library, that will help you to run React in your Angular project simple and fast.

This library supports both React 17 and 18 root API.

## Rapid Start

- `npm i reactor-for-angular`
- ``
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
``


