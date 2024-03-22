import { ParentsComponent } from "@/components/parents"

export default function Parents() {

  const vehicle = {
    color: "white",
    type: "motorcycle"
  }

  return (
    <ParentsComponent.GrandFather>
      <ParentsComponent.Dad>
        <ParentsComponent.Children vehicle={vehicle}/>
      </ParentsComponent.Dad>
    </ParentsComponent.GrandFather>
  )
}