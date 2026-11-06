import type { ProjectVisual as VisualKey } from "@/content/projects";
import { CitedAnswerVisual } from "./CitedAnswerVisual";
import { OperationsVisual } from "./OperationsVisual";
import { ProcurementVisual } from "./ProcurementVisual";
import { WorkbenchVisual } from "./WorkbenchVisual";

const visuals: Record<VisualKey, () => React.JSX.Element> = {
  qa: CitedAnswerVisual,
  workbench: WorkbenchVisual,
  procurement: ProcurementVisual,
  operations: OperationsVisual,
};

export function ProjectVisual({ visual }: { visual: VisualKey }) {
  const Visual = visuals[visual];
  return <Visual />;
}
