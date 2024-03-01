import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-blog', // Update the selector
  templateUrl: './blog.component.html', // Rename the template file accordingly
  styleUrls: ['./blog.component.css'] // Rename the style file accordingly
})
export class BlogComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const elem = $("#parallax");

    // Add event listener
    $(document).on("mousemove", (e: MouseEvent) => {
      this.parallax(e, elem);
    });
  }

  // Magic happens here
  private parallax(e: MouseEvent, elem: any): void {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.css("background-position", x);
  }
}

