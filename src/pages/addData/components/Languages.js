import React from 'react';
import { Row, Col } from 'reactstrap';
import { Select, Input, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { DeleteIcon, AddIcon } from '@chakra-ui/icons';

const Languages = ({ data, handleGlobalAdd, handleGlobalChange, handleGlobalDelete }) => {
  return (
    <div className="add-data__languages">
      <div className="section-title">
        <p>Languages</p>
      </div>
      <Row>
        <Col lg="12">
          {data.languages.length > 0 &&
            data.languages.map((value, index) => {
              return (
                <div className="add-data__accordion">
                  <Accordion allowToggle w="930px" border="1px solid rgba(0, 0, 0, 0.05)" borderRadius="8px">
                    <AccordionItem>
                      <div className="accordion-button">
                        <AccordionButton h="20">
                          <div className="accordion-button__text">
                            {value.language === '' ? (
                              <p>(Not Specified)</p>
                            ) : (
                              <>
                                <p>{value.language}</p>
                                <p className="accordion-text__detail">{value.level}</p>
                              </>
                            )}
                          </div>
                          <AccordionIcon w={10} h={10} color={'#1175D9'} />
                        </AccordionButton>
                      </div>
                      <AccordionPanel pb={4}>
                        <Row>
                          <Col lg="6">
                            <p className="add-data-section__title">Language</p>
                            <Input name="language" value={value.language} onChange={(event) => handleGlobalChange(event, index, 'languages')} variant="filled" focusBorderColor="lime" />
                          </Col>
                          <Col lg="6">
                            <p className="add-data-section__title">Level</p>
                            <Select placeholder="Select option" name="level" value={value.level} onChange={(event) => handleGlobalChange(event, index, 'languages')} variant="filled" focusBorderColor="lime">
                              <option value="Very Good Command">Very Good Command</option>
                              <option value="Highly Proficient">Highly Proficient</option>
                              <option value="Native Speaker">Native Speaker</option>
                            </Select>
                          </Col>
                        </Row>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <DeleteIcon onClick={() => handleGlobalDelete(index, 'languages')} className="delete-button" />
                </div>
              );
            })}
          <Button className="add-button" leftIcon={<AddIcon />} color="#1175D9" bg="white" onClick={() => handleGlobalAdd('languages')}>
            Add one more language
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Languages;
