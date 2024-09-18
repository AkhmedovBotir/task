import { Box, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Popover from 'react-bootstrap/Popover';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Badge, ListGroup, Overlay } from 'react-bootstrap';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import payme from "../img/payme.png"
import shop from "../img/shop.png"
import cardImg from "../img/card.png"
import walk from "../img/walk.png"
import money from "../img/money 1.png"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import avatar from "../img/avatar.png"
export default function BlankCards() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  let card = [
    {
      id: 321545,
      popover: 'Anim pariatur cliche reprehenderit, enim eiusmod',
      sum: '300 560',
      imgIcon: shop,
      imgPay: payme,
      listItem: [
        {
          itemNum: 3,
          itemName: 'Пепси'
        },
        {
          itemNum: 1,
          itemName: 'Big Гамбургер',
          cheese: "С сыром",
          luke: "Без лука"
        },
        {
          itemNum: 2,
          itemName: "Лаваш мясной Standart острый"
        }
      ],
      blank: true,
      comments: true,
      comment: [
        {
          icon: avatar,
          name: "Jhon Doe",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        },
        {
          icon: avatar,
          name: "Jhon Doe",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        },
        {
          icon: avatar,
          name: "Jhon Doe",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        }
      ]
    },
    {
      id: 321545,
      popover: 'Anim pariatur cliche reprehenderit, enim eiusmod',
      sum: '300 560',
      imgIcon: shop,
      imgPay: cardImg,
      listItem: [
        {
          itemNum: 3,
          itemName: 'Пепси'
        },
        {
          itemNum: 1,
          itemName: 'Big Гамбургер',
          cheese: "С сыром",
          luke: "Без лука"
        },
        {
          itemNum: 2,
          itemName: "Лаваш мясной Standart острый"
        }
      ],
      blank: false,
      comments: false
    },
    {
      id: 321545,
      popover: 'Anim pariatur cliche reprehenderit, enim eiusmod',
      sum: '300 560',
      imgIcon: money,
      imgPay: walk,
      listItem: [
        {
          itemNum: 1,
          itemName: 'Big Гамбургер',
          cheese: "С сыром",
          luke: "Без лука"
        }
      ],
      blank: false,
      comments: false

    },
  ]

  return (
    <Box component='main'>
      <Typography variant='h6' className='bg-warning fw-bold px-3 py-2 text-light rounded-top-3'>Заготовка (3)</Typography>
      <Box component='div' className='p-2 bg-secondary-subtle'>
        {
          card.map(res => (
            <Card className="my-2">
              <Card.Header style={{ background: 'transparent' }}>
                <Typography ref={ref} variant='h5' className='d-flex justify-content-between align-items-center'>
                  <Box component='div'>
                    <span className='fw-bold h6 my-1' style={{fontSize: '1rem'}}>ID: {res.id}</span>
                    <button className='btn' onClick={handleClick}>
                      <InfoOutlinedIcon />
                    </button>
                    <Overlay
                      show={show}
                      target={target}
                      placement="right"
                      container={ref}
                      containerPadding={20}
                    >
                      <Popover id="popover-contained">
                        <Popover.Header as="h3">Info</Popover.Header>
                        <Popover.Body>
                          {res.popover}
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </Box>
                  <Box component='div' className='fs-6 text-muted'>
                    <span className='h6'>{res.sum} сум</span>
                    <img src={res.imgIcon} className='mx-2' />
                    <img src={res.imgPay} />
                  </Box>
                </Typography>
              </Card.Header>

              <Card.Body>
                <ListGroup as="ol" numbered>
                  {
                    res.listItem.map(item => (
                      <ListGroup.Item as="li" className="border-0 d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{item.itemNum} X {item.itemName}</div>
                          <div>{item.cheese}</div>
                          <div>{item.luke}</div>
                        </div>
                      </ListGroup.Item>
                    ))
                  }

                </ListGroup>
                <Box component='div' className='text-muted d-flex align-items-center justify-content-end fs-7 py-1 h6'><AccessTimeFilledOutlinedIcon className='mx-1 my-2 h5' /> 15:22</Box>
                <hr />
                {
                  res.comments && (
                    <div>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <div className="w-100 d-flex justify-content-between">
                            <span>Коментарии (1)</span> <Badge bg="primary" className='p-2'>{res.comment.length}</Badge>
                          </div>
                        </AccordionSummary>
                        <AccordionDetails>
                          {
                            res.comment.map(comment => (

                              <Box component='div' className='d-flex align-items-start'>
                                <img src={comment.icon} className='rounded-circle me-3' width='40' />
                                <Box component='div' className='d-flex flex-column'>
                                  <Box component='div' className='fw-bold'>{comment.name}</Box>
                                  <Box component='div' className='text-muted fs-6'>{comment.text}</Box>
                                </Box>
                              </Box>
                            ))
                          }
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  )
                  // : (
                  //   <Button variant='primary' className='w-100'>
                  //     <CheckOutlinedIcon /> Оставить комментарий
                  //   </Button>
                  // )
                }
              </Card.Body>
              {
                res.blank && (
                  <Card.Footer className='d-flex justify-content-around'>
                    <Button variant='outline-primary' className='w-100'><CheckOutlinedIcon /> Готово</Button>
                    {/* <Button variant='outline-secondary' className='text-danger'><ClearOutlinedIcon /> Отменить</Button>
                <Button variant='primary'><CheckOutlinedIcon /> Заказать</Button> */}
                  </Card.Footer>
                )
              }
            </Card>
          ))
        }
      </Box>
    </Box>
  )
}
