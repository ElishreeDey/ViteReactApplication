
import RenderForm from './Form'
import RenderTable  from './Table'

export default function App() {
  return (
    <>
      <div className="pageContainer"> {/*This div is needed to put Form and Table side by side */}
        <RenderForm />
        <RenderTable />
      </div>
    </>
  );
}