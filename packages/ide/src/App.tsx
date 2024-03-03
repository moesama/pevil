import "./assets/app.css";
import { Toolbar } from "@/components/widgets/toolbar.tsx";

function App() {
  return (
    <div className="relative h-screen flex flex-col items-stretch bg-border overflow-hidden">
      <div className="relative flex-1">
        <Toolbar />
      </div>
    </div>
  );
}

export default App;
