# dummy-counter

A simple React component that counts from 0 - 100 and then resets back to 0. This runs for infinity and yes, this is not meant to be functional in any way.

## How to use

Clone this repo to your local computer, then run:

- `npm install && npm run build`

- To make this component available to other projects on your local computer, run `yarn link`.
- Then go to the project where you want to use this package and run `yarn link "dummy-counter"`.

Finally, to fix the multiple copies of React bug that shows up with linked React packages:

- navigate to the root of the `dummy-counter` package
- run `npm link "../path/to/your/project"`

You can now import `dummy-counter` as a normal package installed from npm like so:

```
import Dummy from 'dummy-counter'
...
```

You can also import the type definitions if you're using TypeScript like so:

```
import Dummy, { ICounterProps } from 'dummy-counter'
...
```

## Available props

```

className: string (optional)

```

To customise this component, pass in a class name to the `className` prop and style that class name in your custom CSS.

```

// your-component.js
import Dummy from 'dummy-counter'

...
<Dummy className="dummy" />
...

// your-component.css
.dummy {
  color: white;
  background-color: purple;
}

```

**This component was built for an article on how to publish a React component as a package to npm.**
