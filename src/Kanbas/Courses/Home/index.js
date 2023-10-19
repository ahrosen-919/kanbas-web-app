import ModuleList from "../Modules/ModuleList";
import Status from "./status";


function Home() {
  return (
    <div class="container p-0">
      <div class="row">
        <div class="col">
          <h2>Home</h2>
      <ModuleList />
        </div>
        <div class="col col-3 ms-2 pe-4">
          <h2>Status</h2>
          <Status/>
        </div>
      </div>
      
      
    </div>
  );
}
export default Home;