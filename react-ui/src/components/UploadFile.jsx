import React from 'react';
import axios from 'axios';
import FieldTitle from './FieldTitle';
import { Form, Table, Icon, Button } from 'semantic-ui-react';
import './UploadFile.css';

const TableRow = ({ fileName, link, fileSize }) => (
  <Table.Row>
    <Table.Cell>
      <a href={link}>{fileName}</a>
    </Table.Cell>
    <Table.Cell>{fileSize} kb</Table.Cell>
    <Table.Cell>
      <Icon name="trash" />
    </Table.Cell>
  </Table.Row>
);

class UploadFile extends React.Component {
  state = {
    files: []
  };

  handleChange = async (e, re) => {
    // console.log(process.env.data);
    console.log(e.target.files[0].name);
    const fileName = e.target.files[0].name;
    const fileSize = ~~(+e.target.files[0].size / 1024);
    // console.log(re);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'taalzrdo');

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/peacefulharbor/auto/upload`,
      formData
    );
    this.setState(
      {
        files: [
          ...this.state.files,
          {
            fileName,
            fileSize,
            secureUrl: response.data.secure_url
          }
        ]
      },
      () => {
        this.props.input.onChange(this.state.files);
      }
    );
    console.log(response);
  };

  render() {
    return (
      <Form.Field>
        <FieldTitle text="Upload your documents" number="1" />
        <Button
          className="upload-button"
          onClick={e => {
            e.preventDefault();
            this.fileInput.click();
          }}>
          <Icon name="cloud upload" />Upload a new file
        </Button>
        <input
          className="upload-input"
          type="file"
          onChange={this.handleChange}
          ref={input => (this.fileInput = input)}
        />
        {this.state.files.length === 0 ? null : (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>File name</Table.HeaderCell>
                <Table.HeaderCell>File size</Table.HeaderCell>
                <Table.HeaderCell>Remove</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.files.map((file, index) => (
                <TableRow
                  key={index}
                  fileName={file.fileName}
                  fileSize={file.fileSize}
                  link={file.secureUrl}
                />
              ))}
            </Table.Body>
          </Table>
        )}
      </Form.Field>
    );
  }
}

export default UploadFile;
