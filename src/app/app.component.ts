import { Component } from '@angular/core';
import { graphviz } from "d3-graphviz";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';

  ngOnInit(): void {
    this.d3();
  }

  d3() {
    console.log("hi");
    graphviz("#graphs").renderDot(
      'digraph structs { \
        node [shape=record] \
        rankdir=LR \
        SourceBuffer1 [style=filled fillcolor="gray" label="{SourceBuffer(4) \\nInstanceId: 0} | {TARGET_BUFFER_SAT_INPUT_FULL(0)} | { 5312 x 3456 | P010 } "]; \
        SourceBuffer2 [style=filled fillcolor="gray" label="{SourceBuffer(4) \\nInstanceId: 4} | {TARGET_BUFFER_SAT_INPUT_DS4(0)} | { 1328 x 864 | PD10 } "]; \
        chinode1 [style=filled fillcolor="#33DB1A" label="{ { <sink0> ChiNode(0) | <sink1> ChiNode(1) | <sink2> ChiNode(2) } | { SATNode(255)\\nInstanceId: 1 | \\{1\\} CustomLib = \\"com.qti.node.dummysat\\" | \\{11\\} = Bypass } | <source0> ChiNode(0) } }"]; \
        chinode2 [style=filled fillcolor="#33DB1A" label="{ { <sink0> ChiFull(0) | <sink1> ChiDS4-0(1) | <sink2> ChiDS16-0(2) | <sink3> ChiDS4-1(3) | <sink4> ChiDS16-1(4) | <sink5> ChiDS4-2(5) | <sink6> ChiDS16-2(6)} | { GPUNode(255)\\nInstanceId: 0 | \\{1\\} CustomLib = \\"com.qti.node.gpu\\" | \\{12\\} GPUCapMask = Downscale | \\{11\\} = Bypass } | { <source0> ChiDs4(1) | <source1> ChiDs16(2) } } }"]; \
        IPE [style=filled fillcolor="#CD2020" label="{ { <sink0> FULL(0) | <sink1> DS4(1) | <sink2> DS16(2) } | { IPE(65538)\\nInstanceId: 0 | \\{15\\} enableCHICropInfoPropertyDependency = 1 | \\{3\\} stabilizationType = 3 } | { <source0> Display(8) | { <source1> Video (9) } } } " ] \
        LERM [style=filled fillcolor="#CD2020" label="{ { <sink0> TARFULL(2) | <sink1> TARDS4(4) | <sink2> REFDS4(5) | <sink3> TARDS16(6) | <sink4> REFDS16(7) | <sink5> REFDS2(8) } | { LRME(65541) } | { <source0> OutputPortVector(0) | <source1> DS2(1) } }" ] \
        Property1 [style=filled fontcolor=gray fillcolor="#2D5719" label="{ { <in> P010 | Ion - Queue Depth: 8 } | { Lockable | <out> Hw | Cache } }"] \
        Property2 [style=filled fontcolor=gray fillcolor="#2D5719" label="{ { <in> P010 | Ion - Queue Depth: 8 } | { <out> Hw } }"] \
        Property3 [style=filled fontcolor=gray fillcolor="#2D5719" label="{ { <in> P010 | Ion - Queue Depth: 8 } | { <out> Hw } }"] \
        \
        SourceBuffer1 -> chinode1:sink0 \
        chinode1:source0 -> Property1:in \
        Property1:out -> chinode2:sink0 \
        SourceBuffer2 -> chinode2:sink1 \
        chinode2:source0 -> Property2:in \
        chinode2:source1 -> Property3:in \
        Property1:out -> IPE:sink0 \
        Property2:out -> IPE:sink1 \
        Property3:out -> IPE:sink2 \
        Property1:out -> LERM:sink0 \
        Property2:out -> LERM:sink1 \
        Property2:out -> LERM:sink2 \
        Property3:out -> LERM:sink3 \
        Property3:out -> LERM:sink4 \
        LERM:sink4 -> LERM:sink4 \
      }'
    );
  }

}

