import React, { useEffect } from 'react';
import styled from 'styled-components';
import type { Controller } from '../src/components/Tetris';

type Props = {
  controller: Controller;
};

export default function Controller({ controller }: Props): JSX.Element {
  // Stop game controls from scrolling the page, by preventing their default behavior
  useEffect(() => {
    const keys = ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    window.addEventListener(
      'keydown',
      (event) => {
        if (keys.includes(event.code)) {
          event.preventDefault();
        }
      },
      false
    );
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 12px'
      }}
    >
      <div
        style={{
          padding: '18px',
          border: '1px solid #DDD',
          borderRadius: '72px'
        }}
      >
        <DpadRow>
          <UpDown onClick={controller.flipClockwise} />
        </DpadRow>
        <DpadMidRow>
          <LeftRight onClick={controller.moveLeft} />
          <LeftRight onClick={controller.moveRight} />
        </DpadMidRow>
        <DpadRow>
          <UpDown onClick={controller.moveDown} />
        </DpadRow>
      </div>
      <div>
        <Row>
          <TopRoundBtn onClick={controller.hardDrop} />
        </Row>
        <MidRow>
          <LeftRoundBtn onClick={controller.hold} />
          <RightRoundBtn onClick={controller.flipClockwise} />
        </MidRow>
        <Row>
          <BottomRoundBtn onClick={controller.flipCounterclockwise} />
        </Row>
      </div>
    </div>
  );
}

const dpadSize = 36;

const DpadRow = styled.div`
  display: flex;
  justify-content: center;
  height: ${dpadSize}px;
  width: ${dpadSize * 3}px;
`;

const DpadMidRow = styled(DpadRow)`
  align-items: center;
  justify-content: space-between;
`;

const LeftRight = styled.button`
  width: ${dpadSize}px;
  height: ${dpadSize}px;
  border: 2px solid #ddd;
`;

const UpDown = styled.button`
  width: ${dpadSize}px;
  height: ${dpadSize}px;
  border: 2px solid #ddd;
`;

const RoundBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 2px solid #ddd;
  background-color: green;
`;

const LeftRoundBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 2px solid #ddd;
  background-color: #85B8FF;
`;
const RightRoundBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 2px solid #ddd;
  background-color: #FFADAD;
`;

const TopRoundBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 2px solid #ddd;
  background-color: #FFE270;
`;
const BottomRoundBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 2px solid #ddd;
  background-color: #95DA9E;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  height: 48px;
  width: 144px;
`;

const MidRow = styled(Row)`
  align-items: center;
  justify-content: space-between;
`;
