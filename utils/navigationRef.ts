import type { RootStackParamList } from "../types/RootStackParamList";
import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  ...params: RootStackParamList[RouteName] extends undefined
    ? []
    : [RootStackParamList[RouteName]]
) {
  if (!navigationRef.isReady()) return;

  // @ts-expect-error: TypeScript can't infer this safely, but it's correct
  navigationRef.navigate(name, ...params);
}
