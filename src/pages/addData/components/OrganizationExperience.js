import React from 'react';
import { Row, Col } from 'reactstrap';
import { Textarea, Input, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { DeleteIcon, AddIcon } from '@chakra-ui/icons';

const OrganizationExperience = ({ data, handleGlobalAdd, handleGlobalChange, handleGlobalDelete }) => {
  return (
    <div className="add-data__organization-experience">
      <div className="section-title">
        <p>Organization Experience</p>
      </div>
      <Row>
        <Col lg="12">
          {data.organizationExperience.length > 0 &&
            data.organizationExperience.map((value, index) => {
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
                                  {value.jobTitle} of {value.department} {value.organizationName}
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
                            <Input name="jobTitle" value={value.jobTitle} onChange={(event) => handleGlobalChange(event, index, 'organizationExperience')} variant="filled" focusBorderColor="lime" />
                          </Col>
                          <Col lg="6">
                            <p className="add-data-section__title">Department</p>
                            <Input name="department" value={value.department} onChange={(event) => handleGlobalChange(event, index, 'organizationExperience')} variant="filled" focusBorderColor="lime" />
                          </Col>
                        </Row>
                        <Row className="row">
                          <Col lg="6">
                            <p className="add-data-section__title">Start & End Date</p>
                            <Row>
                              <Col lg="6">
                                <Input name="startDate" value={value.startDate} onChange={(event) => handleGlobalChange(event, index, 'organizationExperience')} variant="filled" focusBorderColor="lime" />
                              </Col>
                              <Col lg="6">
                                <Input name="endDate" value={value.endDate} onChange={(event) => handleGlobalChange(event, index, 'organizationExperience')} variant="filled" focusBorderColor="lime" />
                              </Col>
                            </Row>
                          </Col>
                          <Col lg="6">
                            <p className="add-data-section__title">Organization Name</p>
                            <Input name="organizationName" value={value.organizationName} onChange={(event) => handleGlobalChange(event, index, 'organizationExperience')} variant="filled" focusBorderColor="lime" />
                          </Col>
                        </Row>
                        <Row className="row">
                          <Col lg="12">
                            <p className="add-data-section__title">Description</p>
                            <Textarea name="description" value={value.description} onChange={(event) => handleGlobalChange(event, index, 'organizationExperience')} variant="filled" focusBorderColor="lime" />
                          </Col>
                        </Row>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <DeleteIcon onClick={() => handleGlobalDelete(index, 'organizationExperience')} className="delete-button" />
                </div>
              );
            })}
          <Button className="add-button" leftIcon={<AddIcon />} color="#1175D9" bg="white" onClick={() => handleGlobalAdd('organizationExperience')}>
            Add one more organization experience
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default OrganizationExperience;
