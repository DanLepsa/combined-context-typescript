Combined context typescript app offers a redux-like boilerplate implementation for Context. Split data and reducers and consume parts of state instead of the whole context.

# Usage

npm install

npm start

# Explanation

LoginComponent has access just to the Login context, while the Note component consumes the App context (both Note and Login data).

```
Login component context: {"state":{"username":"","authenticated":false,"pending":false,"error":false}}

Note component context: {"state":{"login":{"username":"","authenticated":false,"pending":false,"error":false},"note":{"id":"","userId":"","title":"","completed":false}}}
```

# Structure

/components

- The component.tsx file receives as props context: LoginContextInterface (or any other context) and in the index.ts file the withLoginContext wraps the component to inject the context

/context

- Each context folder has actions, reducer and state. While the first two are self explanatory and follow the same rules as redux, the state.tsx file contains the Context Interface, provider and consumer and withContext hoc which is used by a component

/context/state.tsx

- main state of the application, along with reducer.ts. Similar to a rootReducer, or main state in redux, but here it's not needed at all. you can just have your contexts separated

ComposeContexts.tsx

- function to combine all the contexts and their values and avoid nesting

App.tsx

- useReducer hoc is used along side useCombinedReducers to create a part of the state, respectively, the whole state. useMemo is used for optimization and logger is used for loggin actions.

# Author

Dan Lepsa @ https://github.com/DanLepsa
