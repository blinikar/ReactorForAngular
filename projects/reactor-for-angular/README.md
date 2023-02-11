# ReactorForAngular

This is ReactorForAngular library, that will help you to run React in your Angular project simple and fast.

This library supports both React 17 and 18 root API.

## Rapid Start

- Install the library: `npm i reactor-for-angular`
- Write your wrapper:
```@Component({
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
```

## Source code

[GitHub](https://github.com/blinikar/ReactInAngularLib)
