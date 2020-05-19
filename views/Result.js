import React, { useEffect } from 'react'
import { Button, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

function Result(props) {
  const result = props.route.params.result
  console.log('result', result)
  return (
    <>
      <SafeAreaView style={{paddingTop: 40}}>
        {result > 50 ? <Text>aaaa</Text> : <Text>kurdar 50</Text>}
      </SafeAreaView>
    </>
  )
}

export default Result
