import React from 'react'

import styled from 'styled-components'

export default function NotFound() {
  return (
    <>
      <S_Title>404</S_Title>
      <S_Description>
        찾을 수 없는 페이지입니다. <br />
        다른 콘텐츠를 보러 가보시겠어요?
      </S_Description>
    </>
  )
}

const S_Title = styled.div`
  font-size: 150px;
  font-weight: 800;
`

const S_Description = styled.div`
  font-size: 25px;
  text-align: center;
  line-height: 1.3;
`
