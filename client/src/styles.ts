import { Button, styled, TextField } from '@mui/material'

export const Container = styled('div')`
  margin: 50px 30px;
`

export const Form = styled('form')`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f1f1fc;
  border-radius: 8px;
`

export const FlexBox = styled('div')`
  display: flex;
  align-items: center;
`

export const StyledInput = styled(TextField)(() => ({
  width: 'calc(100% - 120px)',
}))

export const StyledButton = styled(Button)(() => ({
  width: 120,
  height: 50.25,
  marginLeft: 10,
  color: '#fff',
}))

export const Card = styled('div')`
  padding: 20px;
  background-color: #f1f1fc;
  border-radius: 8px;
`

export const StockInfoWrapper = styled(FlexBox)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}))

export const StockInfoContainer = styled('div')(({ theme }) => ({
  marginRight: 40,
  [theme.breakpoints.down('sm')]: {
    margin: '0 0 20px 0',
  },
}))
