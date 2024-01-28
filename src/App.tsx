import {
  Avatar,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
  TextArea,
  TextAreaDomRef,
  Ui5CustomEvent
} from '@ui5/webcomponents-react';
import { useState } from 'react';


function App() {

  const [ hexText, setHexText ] = useState('')
  const [ binaryText, setBinaryText ] = useState('')

  const pad = (text: string, size: int) => {
    while (text.length < size) text = "0" + text;
    return text;
  }

  const onChangeFn = (e: Ui5CustomEvent<TextAreaDomRef, never>) => {
    const decString = e.target.value as string
    const decArray = decString.split(',')

    let hexText = ''
    let binText = ''

    for (let i = 0; i < decArray.length; i++) {
      const decInt = parseInt(decArray[ i ].trim())
      let hexStr = decInt.toString(16)
      let binStr = decInt.toString(2)

      hexStr = pad(hexStr, 2)
      binStr = pad(binStr, 8)

      if (hexText == '') {
        hexText = hexStr
      } else {
        hexText = hexText + ' ' + hexStr
      }

      if (binText == '') {
        binText = binStr
      } else {
        binText = binText + ' ' + binStr
      }
    }

    setHexText(hexText)
    setBinaryText(binText)
  }

  return (
    <>
      <ShellBar
        logo={<img src="/logo.png" alt={'Vite Logo'} />}
        primaryTitle="Decimal converter"
        profile={<Avatar initials={'UI5'} />}
      />

      <FlexBox
        direction={FlexBoxDirection.Row}
      >

        <FlexBox
          direction={FlexBoxDirection.Column}
          fitContainer={true}
          justifyContent={FlexBoxJustifyContent.SpaceBetween}
          style={{ marginRight: '10px' }}>

          <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
            Decimal (separated by comma)
          </Link>

          <TextArea
            style={{ height: '200px' }}
            onChange={onChangeFn}
          />
        </FlexBox>

        <FlexBox
          direction={FlexBoxDirection.Column}
          fitContainer={true}
        >

          <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
            Hex Values
          </Link>

          <TextArea
            style={{ height: '200px' }}
            readonly={true}
            value={hexText}
          />

          <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
            Binary Values
          </Link>

          <TextArea
            style={{ height: '200px' }}
            readonly={true}
            value={binaryText}
          />
        </FlexBox>

      </FlexBox>
    </>
  );
}

export default App;
