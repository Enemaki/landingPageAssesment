import CreateHeader from "./components/CreateHeader"
import CreateForm from "./components/CreateForm"
import CreateLink from "./components/CreateLink"
import CreateFooter from "./components/CreateFooter"
import Alerts from "./components/Alerts"
export default function Home() {
    return (
        <div>
          <CreateHeader />
          <CreateForm />
          <CreateLink />
          <Alerts />
          <CreateFooter />
        </div>
    )
}