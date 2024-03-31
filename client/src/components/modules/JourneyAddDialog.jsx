import { Button } from '@/components/atoms/Button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/atoms/dialog';
import { Input } from '@/components/atoms/input';
import { P } from '@/components/atoms/P';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export function JourneyAddDialog() {
    const dispath = useDispatch();
    const [input, setInput] = useState('');
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const addJourney = () => ({
        type: 'journey/addJourney',
        payload: {
            journeyName: input,
        },
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" className="w-72 h-18 j">
                    <P>나의 여정 추가하기</P>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        <P variant="mainHeader">여정 이름 등록</P>
                    </DialogTitle>
                    <DialogDescription>여정에 대한 이름을 등록하세요.</DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Input defaultValue="여정의 제목을 입력하세요." onChange={handleInputChange} />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            취소
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button
                            type="submit"
                            variant="secondary"
                            onClick={() => {
                                dispath(addJourney());
                            }}
                        >
                            등록
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
