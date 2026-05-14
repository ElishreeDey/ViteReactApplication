
import RenderForm from './Form'
import RenderTable  from './Table'
import RenderSnackbar  from './Snackbar'

export default function App() {
  return (
    <>
      <div className="pageContainer"> {/*This div is needed to put Form and Table side by side */}
        <RenderForm />
        <RenderTable />
        <RenderSnackbar />
      </div>
    </>
  );
}