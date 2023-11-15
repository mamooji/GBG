import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { ProcessItem } from "../data/models/processItemModel";

export const ProcessItems: Array<ProcessItem> = [
  {
    name: "Mice and Rats",
    description:
      "Mice and Rats are common household pests, often called rodents. There are thousands of different mice and rat species, the most common being the Norway Rat, also known as the ‘Brown Rat’ or ‘Sewer Rat.’ These rodents eat and contaminate food, damage electrical appliances, building structures and properties by masticating and burrowing if not addressed on time. We use professional techniques including both bait stations and traps when getting rid of mice and rats. A bait station is a plastic, enclosed box, which contains rodenticides inside. The poison is covered so as to be safe for kids and pets, but is very effective at killing rodents",
    icon: GlobeAltIcon,
  },
  {
    name: "Cockroaches",
    description:
      "The main attraction for a cockroach is food, water and shelter, they are active at night and that is why many people are completely unaware of their presence in their homes. It is a public health concern in locations like restaurants and hospitals because they have been known to carry Salmonella bacteria, responsible for food poisoning, therefore it is very important to take action immediately once noticed. There are five species of cockroaches found in Ontario but the most common are German and American cockroaches.There are different strategies to control their infestation, which is adopted according to the situation and infestation level. Our technicians are trained and experienced to adopt the best treatment method under the integrated pest management principles.",
    icon: ScaleIcon,
  },
  {
    name: "Bedbugs",
    description:
      "Bedbugs can be caused by many things, but filth isn’t one of them.  They can come from other infested areas or from used furniture. They can be transferred in luggage, purses, backpacks, or other items placed on soft or upholstered surfaces. They can also travel between rooms in multi-unit buildings, such as apartment complexes and hotels. Some ways to prevent bedbugs are to avoid or remove clutters, doing laundry frequently, keeping bed sheets away from the ground, and the use of insecticides. Our team of trained professionals address bedbugs with the use of insecticides as a permanent solution, killing them within minutes.",
    icon: LightningBoltIcon,
  },
  {
    name: "Carpenter Ants",
    description:
      "Carpenter ants are large ants that build nests in preferably dead, damp wood. They chewed out the wood with their jaws, however, unlike termites, they do not consume wood, rather they damage and dwell in it. They're mostly found in moist or wet places, like near the windows in houses. We use pesticide spray to rid of carpenter ants, which when sprayed on their nest, eliminates the problem almost immediately. ",
    icon: AnnotationIcon,
  },
];
