# Directives

---

## What are directives?

- Directives are entities that **change the behavior** of components
- Components are just directives with templates
- Directives can be applied to native elements or custom components

There are two types of directives:

- **Attribute directives:** Changes the behavior of a component whitout affecting its template (NgClass, NgStyle)
- **Structural directives:** Changes the behavior of a component by modifying its template (NgIf, NgFor)

---

## NgStyle Directive

Directive that modifies the "style" attribute of a component

```ts
@Component({
  selector: 'style-example',
  template: `
    <p style="padding: 1rem"
      [ngStyle]="{
        color: 'red',
        'font-weight': 'bold',
        borderBottom: borderStyle
    }">
      <ng-content></ng-content>
    </p>
  `
})
export class StyleExampleComponent {
  borderStyle: string = '1px solid black';
}
```

---

## NgStyle Directive

NgStyle is a directive with a property selector "[ngStyle]"

```ts
@Directive({
  selector: [ngStyle]
})
```

It has an input property called "ngStyle" which expects an object

```ts
class NgStyleDirective {
  @Input() ngStyle: SomeShape;
}
```

The object accepts CSS properties in kebab case or camel case

```ts
'font-weight': ... // kebab case
borderBottom: ... // camel case
```

The final style it's going to be a combination of the style attribute and [ngStyle]

```html
<p style="padding:1rem; color:red; font-weight:bold; border:1px solid black">

```

---

## NgClass Directive

- Changes the "class" attribute of the host component
- The NgClass directive can be used with strings, arrays or objects

```ts
@Component({
  selector: 'class-as-string',
  template: '<p ngClass="centered-text underlined" class="orange"></p>',
  styles: [ ... ]
})
export class ClassAsStringComponent {}
```

Resulting class attribute:

```html
<p class="orange centered-text underlined"></p>
```

---

## NgClass Directive (String)

Used with a string:

```ts
@Component({
  selector: 'class-as-string',
  template: '<p ngClass="centered-text underlined" class="orange"></p>',
  styles: [ ... ]
})
export class ClassAsStringComponent {}
```

Or using a string property

```ts
@Component({
  selector: 'class-as-string',
  template: '<p [ngClass]="classes" class="orange"></p>',
  styles: [ ... ]
})
export class ClassAsStringComponent {
  classes = 'centered-text underlined';
}
```

---

## NgClass Directive (Array)

Used with an array:

```ts
@Component({
  selector: 'class-as-string',
  template: `
    <p [ngClass]="['centered-text', 'underlined']" class="orange"></p>
  `,
  styles: [ ... ]
})
export class ClassAsStringComponent {}
```

Or using an array property

```ts
@Component({
  selector: 'class-as-string',
  template: '<p [ngClass]="classes" class="orange"></p>',
  styles: [ ... ]
})
export class ClassAsStringComponent {
  classes = ['centered-text', 'underlined'];
}
```

---

## NgClass Directive (Object)

```ts
@Component({
  selector: 'class-as-string',
  template: `
    <p 
      [ngClass]="{
        'centered-text': isCentered, 
        underlined: isUnderlined
      }" 
      class="orange">
    </p>
  `,
  styles: [ ... ]
})
export class ClassAsStringComponent {
  isCentered = true;
  isUnderlined = false;
}
```

Result:

```html
<p class="orange centered-text"></p>
```

---

## Structural Directives



---







---

## Built-in Directives

---

## Custom Directives

_highlight.directive.ts_

```ts
import { Directive } from '@angular/core';

@Directive({
  selector: '[rio-highlight]',
  export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
  }
})
```

```html
<rio-message [rio-highlight]></rio-message>
```


