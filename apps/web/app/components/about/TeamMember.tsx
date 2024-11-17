import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
    name: string
    position: string
    description: string
    imageUrl: string
  }
  
export  const teamMembers: TeamMember[] = [
    {
      name: "K.A Rishman fernando",
      position: "CEO",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "keith perera",
      position: "EGO",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Krishnan gopal",
      position: "CTO",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
  ]
  
  const TeamMemberCard = ({ member }: { member: TeamMember }) => {
    return (
      <Card className="border-none rounded-none">
        <CardContent className="p-0">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg mb-4"
          />
          <p className="mb-2 text-lg font-medium">{member.description}</p>
          <p className="text-sm text-muted-foreground">
            ({member.position}) {member.name}
          </p>
        </CardContent>
      </Card>
    )
  }
  
  export default TeamMemberCard