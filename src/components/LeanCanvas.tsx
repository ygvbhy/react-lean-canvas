import { CanvasItemProps } from '../types';
import CanvasCard from './canvas/CanvasCard';

function LeanCanvas({ canvasData }: { canvasData: CanvasItemProps }) {
  console.log(canvasData);
  return (
    <div className="border-4 border-black">
      <div className="grid grid-cols-5">
        <CanvasCard title="1. 문제" notes={canvasData.problem?.notes || []} />
        <CanvasCard
          title="4. 해결안"
          notes={canvasData.solution?.notes || []}
        />
        <CanvasCard
          title="3. 가치제안"
          notes={canvasData.valueProposition?.notes || []}
        />
        <CanvasCard
          title="5. 경쟁우위"
          notes={canvasData.unfairAdvantage?.notes || []}
        />
        <CanvasCard
          title="2. 목표 고객"
          notes={canvasData.customerSegments?.notes || []}
        />
        <CanvasCard
          title="기존 대안"
          isSubTitle
          notes={canvasData.existingAlternatives?.notes || []}
        />
        <CanvasCard
          title="8. 핵심지표"
          notes={canvasData.keyMetrics?.notes || []}
        />
        <CanvasCard
          title="상위개념"
          isSubTitle
          notes={canvasData.highLevelConcept?.notes || []}
        />
        <CanvasCard
          title="9. 고객 경로"
          notes={canvasData.channels?.notes || []}
        />
        <CanvasCard
          title="얼리어답터"
          isSubTitle
          notes={canvasData.earlyAdopters?.notes || []}
        />
      </div>
      <div className="grid grid-cols-2">
        <CanvasCard
          title="7. 비용 구조"
          notes={canvasData.costStructure?.notes || []}
        />
        <CanvasCard
          title="6. 수익 흐름"
          notes={canvasData.revenueStreams?.notes || []}
        />
      </div>
    </div>
  );
}

export default LeanCanvas;
