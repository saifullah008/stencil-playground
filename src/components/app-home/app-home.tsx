import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
        <stencil-route-link url="/login/stencil">
          <button>login page</button>
        </stencil-route-link>

      </div>
    );
  }
}
