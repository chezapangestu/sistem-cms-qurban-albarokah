import React from 'react';
import { Row, Col } from 'reactstrap';
import { Textarea, Input, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { DeleteIcon, AddIcon } from '@chakra-ui/icons';

const WorkingExperience = ({ data, handleGlobalAdd, handleGlobalChange, handleGlobalDelete }) => {
  return (
    <div className="add-data__working-experience">
      <div className="section-title">
        <p>Working Experience</p>
      </div>
      <Row>
        <Col lg="12">
          {data.workExperience.length > 0 &&
            data.workExperience.map((value, index) => {
              return (
                <div className="add-data__accordion">
                  <Accordion allowToggle w="930px" border="1px solid rgba(0, 0, 0, 0.05)" borderRadius="8px">
                    <AccordionItem>
                      <div className="accordion-button">
                        <AccordionButton h="20">
                          <div className="accordion-button__text">
                            {value.jobTitle === '' ? (
                              <p>(Not Specified)</p>
                            ) : (
                              <>
                                <p>
                                  {value.jobTitle} at {value.employer}
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
                            <p className="add-data-section__title">Job Title</p>
                            <Input name="jobTitle" value={value.jobTitle} onChange={(event) => handleGlobalChange(event, index, 'workExperience')} variant="filled" focusBorderColor="lime" />
                          </Col>
                          <Col lg="6">
                            <p className="add-data-section__title">Employer</p>
                            <Input name="employer" value={value.employer} onChange={(event) => handleGlobalChange(event, index, 'workExperience')} variant="filled" focusBorderColor="lime" />
                          </Col>
                        </Row>
                        <Row className="row">
                          <Col lg="6">
                            <p className="add-data-section__title">Start & End Date</p>
                            <Row>
                              <Col lg="6">
                                <Input name="startDate" value={value.startDate} onChange={(event) => handleGlobalChange(event, index, 'workExperience')} variant="filled" focusBorderColor="lime" />
                              </Col>
                              <Col lg="6">
                                <Input name="endDate" value={value.endDate} onChange={(event) => handleGlobalChange(event, index, 'workExperience')} variant="filled" focusBorderColor="lime" />
                              </Col>
                            </Row>
                          </Col>
                          <Col lg="6">
                            <p className="add-data-section__title">City</p>
                            <Input name="city" value={value.city} onChange={(event) => handleGlobalChange(event, index, 'workExperience')} variant="filled" focusBorderColor="lime" />
                          </Col>
                        </Row>
                        <Row className="row">
                          <Col lg="12">
                            <p className="add-data-section__title">Description</p>
                            <Textarea name="description" value={value.description} onChange={(event) => handleGlobalChange(event, index, 'workExperience')} variant="filled" focusBorderColor="lime" />
                          </Col>
                        </Row>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <DeleteIcon onClick={() => handleGlobalDelete(index, 'workExperience')} className="delete-button" />
                </div>
              );
            })}
          <Button className="add-button" leftIcon={<AddIcon />} color="#1175D9" bg="white" onClick={() => handleGlobalAdd('workExperience')}>
            Add one more working experience
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default WorkingExperience;
