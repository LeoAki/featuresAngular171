import { Component, computed, effect, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-input-signals',
  standalone: true,
  imports: [],
  templateUrl: './input-signals.component.html',
  styleUrl: './input-signals.component.css'
})
export class InputSignalsComponent {
  // Ahora los signals pueden ser declarados como @Input() sin un decorador explícito:
  firstName = input<string>(); // InputSignal<string|undefined>

  //Las entradas obligatorias siempre tienen un valor del tipo de entrada indicado.
  //Se declaran mediante la función input.required.
  lastName = input.required<string>(); // InputSignal<string>
  age = input(0); // InputSignal<number>
  year: InputSignal<any | number> = input();

  // Deriving values
  ageMultiplied = computed(() => this.age()*2);

  // Cómo se monitorean cambios?
  // constructor() {
  //   effect(() => {
  //     console.log('Nuevo valor::',this.age());
  //   });
  // }
}
