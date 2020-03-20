**Component Side Effects**

- [Lecture Notes](https://www.notion.so/Component-Side-Effects-8e69f440dfb3448d8e2b8ab25c31df4f)

* A _side effect_ is anything that affects something outside of the scope of the function being executed.
* Two categories of side effects:
  - side effect that requires cleanup
  - side effect that doesn't require clean up
* _Pure Component_ is a React component that doesn't ahve side effects
  - A pure component always renders the same output for the same state and props
* _The Effect Hook_

  - `useEffect()` tells React that a component needs to run or execute a side effect

  - Syncing effect hook
    _ We can set effect hooks to fire with state and props changes
    _ Using a dependency array as the second argument in the effect hook, we can tell it with which state or props the effect should be synced. The array at the end of the following exaple is a _dependancy array_, it tells the hook to fire when `[props.userID]` changes. (We could also leave the array empty `[]` so that the component only fires when it mounts)

        ```const [user, setUser] = useState();
        const [error, setError] = useState();
        useEffect(() => {
        fetchUserData(props.userId)
        .then(res => setUser(res.data.user))
        .catch(err => setError(err.response.message));
        }, [props.userId]);
        ```

  * _Using the effect hook to control when we fetch data from an API
    _ This example will fetch the data when the component mounts:

    ```
    function App() {
    // Initialize state to hold the image URL
    const [dogPic, setDogPic] = useState("");
    useEffect(() => {
    // This axios GET request will return a single image
    axios
    .get("https://dog.ceo/api/breeds/image/random")
    // Which we then set to state
    .then(res => setDogPic(res.data.message))
    // Always include error handling
    .catch(err => console.log(err));
    }, []);

    return (
    <div className="App">
    <h1>We Love Puppers</h1>
    <img src={dogPic} alt="a random dog" />
    </div>
    );
    }
    ```

  * It's generally not a good practice to write a data-call function otuside of the effect hook.
  * This example fetches multiple times with synced effect hooks:

    ```
    function App() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState("react");

    useEffect(() => {
        const fetchData = () => {
        axios
            .get("https://hn.algolia.com/api/v1/search?query=" + query)
            .then(res => setData(result.data));
        };

        fetchData();
    }, [query]);

    return (
        <>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <ul>
            {data.hits.map(item => (
            <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
            </li>
            ))}
        </ul>
        </>
    );
    }
    ```

  * Cleaning up side effects with the effect hook

    - Things we might want to clean up:
      - network requests
      - manual DOM manipulations
      - logging
      - event listener added to the DOM
    - The effect hook has a built in way to handle cleanups!
    - "To clean up an effect, we return a function from the effect hook’s callback function"
      ```
      useEffect(() => {
      // We write our desired effect as before.
      console.log("The Effect Hook has run.");
      // Returning a function will tell React that you want this
      // code to run when the component unmounts or re-renders
      return () => console.log("The Effect Hook has been cleaned up.");
      });
      ```
    - The returned function is called when the component is unmounting, giving us a place to clean up subscriptions and event listeners.
    - Example:

      ```
      const App = () => {
      const [position, setPosition] = useState({ x: 0, y: 0 });

      useEffect(() => {
          const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
          window.addEventListener("mousemove", setFromEvent);

          // the function returned here will remove, or "clean up", the event listener
          return () => {
          window.removeEventListener("mousemove", setFromEvent);
          };
      }, []);

      return (
          <div>
          {position.x}:{position.y}
          </div>
      );
      };
      ```
