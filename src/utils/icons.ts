import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import {
  faCartPlus,
  faDatabase,
  faGamepad,
  faGear,
  faHouse,
  faNetworkWired,
  faPaintRoller,
  faSave,
  faStar,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

// function isIconDefinition(
//   obj: IconsSolid.IconPack | IconsSolid.IconDefinition | IconsSolid.IconPrefix,
// ): obj is IconsSolid.IconDefinition {
//   return !!(obj as IconsSolid.IconDefinition).icon;
// }

export type TIconId = string | [string, string];

export function initializeIcons() {
  //   const iconSolid = Object.values(IconsSolid).filter<IconsSolid.IconDefinition>(
  //     (obj): obj is IconsSolid.IconDefinition => isIconDefinition(obj),
  //   );

  //   const iconBrands = Object.values(IconsBrand).filter<IconsBrand.IconDefinition>(
  //     (obj): obj is IconsBrand.IconDefinition => isIconDefinition(obj),
  //   );

  library.add(
    ...[
      faPaintRoller,
      faDatabase,
      faTools,
      faSquareJs,
      faNetworkWired,
      faSave,
      faHouse,
      faGamepad,
      faGear,
      faStar,
      faCartPlus,
    ],
  );

  //   library.add(...iconSolid);
  //   library.add(...iconBrands);
}
