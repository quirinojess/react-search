<h1>React Search</h1>
<p>A search component for react</p>
<hr/>
    <h2> History</h2>
    v1.0 - September 2023 - first version
    <hr />
    <h2> Usage</h2>
    <h3>
     In the folder <strong>src/pages/home</strong> we have the implementation of
     the component with data storage.
    </h3>
    <p>
     <strong>Props</strong>
    </p>
    <table>
     <thead>
      <tr>
       <th>Name</th>
       <th>Type</th>
       <th>Description</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>searchResults</td>
       <td >data[]</td>
       <td>search results data values</td>
      </tr>
      <tr>
       <td>setSearchResults</td>
       <td >set State</td>
       <td>search results set state action</td>
      </tr>
      <tr>
       <td>initialData</td>
       <td >data[]</td>
       <td>Initial data values</td>
      </tr>
      <tr>
       <td>isClearable</td>
       <td >boolean</td>
       <td>show the 'clear' function</td>
      </tr>
      <tr>
       <td>placeholder</td>
       <td>string</td>
       <td>Placeholder text</td>
      </tr>
     </tbody>
    </table>
    <h3>
     In the folder <strong>src/components/search</strong> we have the search
     component:
    </h3>
    <p>
     <strong>handleChange </strong>- Search the initial data to see if there is
     a match with what was entered.
    </p>
       <Code>
          function handleChange(e: ChangeEvent<HTMLInputElement>) {
      const searchResult = initialData?.filter(obj =>
       obj.name.toLowerCase().includes(e.target.value.toLowerCase().toString())
      );
      if (searchResult) {
       setSearchResults(searchResult);
      }
      if (!e.target.value) {
       setSearchResults(initialData);
      }
     }   
    </Code>
    <p>
     <strong>clearSearch </strong>- Clear search values
    </p>
      <Code>
         // useRef is used to clear input
      const input = useRef<HTMLInputElement>(null);
     // the clear function
     function clearSearch() {
      setSearchResults(initialData);
      if (input.current) {
       input.current.value = ''
      }
     }
      </Code>
    <hr />
    <h2>Style guide</h2>
    <p>
     The Component has important classes . But you can adapt to your needs and
     build your own style.
    </p>
       <Code>  /* Search component style */
     @keyframes box {
      0% {
       box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
      100% {
       box-shadow: -10px 10px 10px -10px rgba(0, 0, 0, 0.35);
      }
     }
     .search {
      background: var(--white);
      width: 100%;
      color: grey;
      padding: 5px;
      margin: 15px 0;
      font-size: 14px;
      display: flex;
      align-items: center;
      animation: box 1s ease 0s 1 normal forwards;
     }
     .search svg {
      width: 10px;
      margin-right: 10px;
      color: var(--grey);
      fill: var(--grey);
     }
     .search input {
      background: var(white);
      border: 0;
      width: 90%;
      color: var(--grey-deep);
      transition: 1s ease;
     }
     .search input:focus {
      border: 0;
      outline: none;
      color: var(--grey-light);
     }
     /* list component style */
     .list {
      width: 100%;
      color: grey;
      margin: 50px 0;
      font-size: 14px;
     }
     .list ul {
      width: 100%;
      margin: 0;
      padding: 0;
     }
     .list li {
      background: var(--white);
      padding: 10px 5px;
      margin: 10px 0;
      border-radius: 5px;
      list-style: none;
      border-bottom: 1px solid;
      border-color: var(--grey);
      font-size: 14px;
      display: flex;
      gap: 0 5px;
      transition: 0.9s ease;
     }
     .list li:hover {
      background: var(--yellow);
     }
     .list li span {
      color: var(--grey-light);
      font-size: 18px;
     }
     .list li:hover span {
      color: var(--grey-deep);
     }
       </Code>
    <hr />
    <h2>Implementing API</h2>
    <p>You can integrate a data API to load your initial list of data</p>
    <p>
     The base example works with mocked data, but the idea is that you integrate
     with a database API.
    </p>
    <h3>
     In <strong>src/services</strong> we have a example of implementation:
    </h3>
           <Code>
              async function getData() {
     //implement your api here
     }
     export const searchService = {
      getData,
     };
     "
     language="typescript"
     showLineNumbers={true}
    />
           </Code>
    <hr />
    <h2>Show your support</h2>
    <p>
     This is a component under development and continues to improve. If you have
     any suggestions, please make your contribution.
    </p>
    <h5>Give a ⭐️ if this project helped you! Thank You!</h5>
   </div>

  </div>

