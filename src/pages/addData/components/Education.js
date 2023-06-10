import React from 'react';
import { Row, Col } from 'reactstrap';
import {
  Textarea,
  Input,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import { DeleteIcon, AddIcon } from '@chakra-ui/icons';

const Education = ({
  data,
  handleGlobalAdd,
  handleGlobalChange,
  handleGlobalDelete,
}) => {
  return (
    <div className="add-data__education">
      <div className="section-title">
        <p>Education</p>
      </div>
      <Row>
        <Col lg="12">
          <p className="add-data-section__title">
            A varied education on your resume sums up the value that your
            learnings and background will bring to job
          </p>
          {data.education.length > 0 &&
            data.education.map((value, index) => {
              return (
                <div className="add-data__accordion">
                  <Accordion
                    allowToggle
                    w="930px"
                    border="1px solid rgba(0, 0, 0, 0.05)"
                    borderRadius="8px"
                  >
                    <AccordionItem>
                      <div className="accordion-title">
                        <AccordionButton h="20">
                          <div className="accordion-button__text">
                            {value.school === '' ? (
                              <p>(Not Specified)</p>
                            ) : (
                              <>
                                <p>
                                  {value.degree} at {value.school}
                                </p>
                                <p className="accordion-text__detail">
                                  {value.startDate} - {value.endDate}
                                </p>
                              </>
                            )}
                          </div>
                          <AccordionIcon w={10} h={10} color={'#1175D9'} />
                        </AccordionButton>
                      </div>
                      <AccordionPanel pb={4}>
                        <Row className="row">
                          <Col lg="6">
                            <p className="add-data-section__title">School</p>
                            <Input
                              name="school"
                              value={value.school}
                              onChange={(event) =>
                                handleGlobalChange(event, index, 'education')
                              }
                              variant="filled"
                              focusBorderColor="lime"
                            />
                          </Col>
                          <Col lg="6">
                            <p className="add-data-section__title">Degree</p>
                            <Input
                              name="degree"
                              value={value.degree}
                              onChange={(event) =>
                                handleGlobalChange(event, index, 'education')
                              }
                              variant="filled"
                              focusBorderColor="lime"
                            />
                          </Col>
                        </Row>
                        <Row className="row">
                          <Col lg="6">
                            <p className="add-data-section__title">
                              Start & End Date
                            </p>
                            <Row>
                              <Col lg="6">
                                <Input
                                  name="startDate"
                                  value={value.startDate}
                                  onChange={(event) =>
                                    handleGlobalChange(
                                      event,
                                      index,
                                      'education'
                                    )
                                  }
                                  variant="filled"
                                  focusBorderColor="lime"
                                />
                              </Col>
                              <Col lg="6">
                                <Input
                                  name="endDate"
                                  value={value.endDate}
                                  onChange={(event) =>
                                    handleGlobalChange(
                                      event,
                                      index,
                                      'education'
                                    )
                                  }
                                  variant="filled"
                                  focusBorderColor="lime"
                                />
                              </Col>
                            </Row>
                          </Col>
                          <Col lg="6">
                            <p className="add-data-section__title">City</p>
                            <Input
                              name="city"
                              value={value.city}
                              onChange={(event) =>
                                handleGlobalChange(event, index, 'education')
                              }
                              variant="filled"
                              focusBorderColor="lime"
                            />
                          </Col>
                        </Row>
                        <Row className="row">
                          <Col lg="12">
                            <p className="add-data-section__title">
                              Description
                            </p>
                            <Textarea
                              name="description"
                              value={value.description}
                              onChange={(event) =>
                                handleGlobalChange(event, index, 'education')
                              }
                              variant="filled"
                              focusBorderColor="lime"
                            />
                          </Col>
                        </Row>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <DeleteIcon
                    onClick={() => handleGlobalDelete(index, 'education')}
                    className="delete-button"
                  />
                </div>
              );
            })}
          <Button
            className="add-button"
            leftIcon={<AddIcon />}
            color="#1175D9"
            bg="white"
            onClick={() => handleGlobalAdd('education')}
          >
            Add one more education
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
