import { Component } from '@angular/core';
import { graphviz } from "d3-graphviz";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd3-graph Hello World';

  d3() {
    
    graphviz("#graphs").renderDot(
      'digraph \
      {a -> b -> c -> d}\
      '
    );
  }
}
