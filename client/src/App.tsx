import { Typography } from '@mui/material'
import { useState } from 'react'
import {
  Card,
  Container,
  FlexBox,
  Form,
  StyledButton,
  StyledInput,
  StockInfoWrapper,
  StockInfoContainer,
} from './styles'
import { getStockDataBySymbol } from './services'

interface StockInfoProps {
  title: string
  value: number | string
  percent?: number | string
}

const StockInfo = ({ title, value, percent }: StockInfoProps) => (
  <StockInfoContainer>
    <Typography variant='subtitle1'>{title}</Typography>
    <FlexBox>
      <Typography variant='h4'>$ {value || '-'}</Typography>
      {percent && (
        <Typography
          sx={{
            background: Number(percent) > 0 ? 'green' : 'red',
            color: '#fff',
            padding: '3px 8px',
            marginLeft: 0.5,
          }}
        >
          {percent}
        </Typography>
      )}
    </FlexBox>
  </StockInfoContainer>
)

interface StockProps {
  o: number | string // Open price of the day
  h: number | string // High price of the day
  l: number | string // Low price of the day
  c: number | string // Current price
  pc: number | string // Previous close price
  d: number | string // Change
  dp: number | string // Percent change
}

const App = () => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState<StockProps>({
    o: '',
    h: '',
    l: '',
    c: '',
    pc: '',
    d: '',
    dp: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const quoteHandler = async () => {
    if (!query) return
    try {
      const data = await getStockDataBySymbol(query.toUpperCase())
      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Form>
        <Typography variant='h4' mb={3}>
          Stock Price Tracker
        </Typography>
        <FlexBox>
          <StyledInput
            label='Enter a symbol here'
            variant='outlined'
            value={query}
            required
            onChange={handleChange}
          />
          <StyledButton variant='contained' onClick={quoteHandler}>
            Get Quote
          </StyledButton>
        </FlexBox>
      </Form>

      <Card>
        <Typography variant='h3' align='center' mb={3} sx={{ textTransform: 'uppercase' }}>
          Symbol - {query}
        </Typography>
        <StockInfoWrapper>
          <StockInfo title='Current Price' value={data.c} />
          <StockInfo title='Privious Price' value={data.pc} />
          <StockInfo title='Margin' value={data.d} percent={data.dp} />
        </StockInfoWrapper>
      </Card>
    </Container>
  )
}

export default App
