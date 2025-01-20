import { CanvasItemProps, NoteType } from '../types';
import CanvasCard from './canvas/CanvasCard';

function LeanCanvas({
  canvasData,
  onCanvasChange,
}: {
  canvasData: CanvasItemProps;
  onCanvasChange: (canvas: CanvasItemProps) => void;
}) {
  const handleNotesChange = (section: string, updatedNotes: NoteType[]) => {
    const updatedCanvas = { ...canvasData, [section]: { notes: updatedNotes } };

    onCanvasChange(updatedCanvas);
  };

  return (
    <div className="border-4 border-black">
      <div className="grid grid-cols-5">
        <CanvasCard
          title="1. 문제"
          notes={canvasData.problem?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('problem', notes)
          }
        />
        <CanvasCard
          title="4. 해결안"
          notes={canvasData.solution?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('solution', notes)
          }
        />
        <CanvasCard
          title="3. 가치제안"
          notes={canvasData.valueProposition?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('valueProposition', notes)
          }
        />
        <CanvasCard
          title="5. 경쟁우위"
          notes={canvasData.unfairAdvantage?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('unfairAdvantage', notes)
          }
        />
        <CanvasCard
          title="2. 목표 고객"
          notes={canvasData.customerSegments?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('customerSegments', notes)
          }
        />
        <CanvasCard
          title="기존 대안"
          isSubTitle
          notes={canvasData.existingAlternatives?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('existingAlternatives', notes)
          }
        />
        <CanvasCard
          title="8. 핵심지표"
          notes={canvasData.keyMetrics?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('keyMetrics', notes)
          }
        />
        <CanvasCard
          title="상위개념"
          isSubTitle
          notes={canvasData.highLevelConcept?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('highLevelConcept', notes)
          }
        />
        <CanvasCard
          title="9. 고객 경로"
          notes={canvasData.channels?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('channels', notes)
          }
        />
        <CanvasCard
          title="얼리어답터"
          isSubTitle
          notes={canvasData.earlyAdopters?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('earlyAdopters', notes)
          }
        />
      </div>
      <div className="grid grid-cols-2">
        <CanvasCard
          title="7. 비용 구조"
          notes={canvasData.costStructure?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('costStructure', notes)
          }
        />
        <CanvasCard
          title="6. 수익 흐름"
          notes={canvasData.revenueStreams?.notes || []}
          onNotesChange={(notes: NoteType[]) =>
            handleNotesChange('revenueStreams', notes)
          }
        />
      </div>
    </div>
  );
}

export default LeanCanvas;
