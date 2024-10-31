import { Component, computed, effect, Input, input, InputSignal } from '@angular/core';

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


  //Signals-Inputs admiten las mismas funciones que los decoradores en inputs.
  //Puede especificar una función de transformación para una Signal-Input
  //a fin de analizar los valores sin procesar en función del tipo de entrada esperado.
  disable = input(false, {
    transform: (v: boolean| string) => typeof v === 'string' ? v === '': v,
  });

  country = input<String>('', {
    alias: 'countryUser'
  });

  // Deriving values
  //Obtención de valores
  //Puede obtener valores de manera eficiente en función de las signals-Inputs
  //mediante el uso de la función computada.
  //Signals-Inputs se pueden utilizar en una función computada
  //como cualquier otra señal en su aplicación.

  // Si age() no cambia, la derivación ageMultiplied utilizará de manera eficiente
  // el valor memorizado anterior sin ejecutarse.
  ageMultiplied = computed(() => this.age()*2);

  // Cómo se monitorean cambios
  // watching changes
  constructor() {
    effect(() => {
      console.log('Nuevo valor::',this.age());
    });
  }
}
