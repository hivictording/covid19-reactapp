/**
 * Written by Victor Ding
 * 2020-04-20
 */

const MyTable = () => {
  return (
      <table BORDER={1}>
          <caption>Your Content Here</caption>
          <thead>
                <tr>
                    <th rowSpan={2}></th>
                    <th colSpan={2}>A common header for 2 subheads</th>
                    <th rowSpan={2}>Header 3</th>
                </tr>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                </tr>
          </thead>
          <tbody>
                <tr>
                    <th>Thing A</th>
                    <td>data A1</td>
                    <td>data A2</td>
                    <td>data A3</td>
                </tr>
                <tr>
                    <th>Thing B</th>
                    <td>data B1</td>
                    <td>data B2</td>
                    <td>data B3</td>
                </tr>
                <tr>
                    <th>Thing C</th>
                    <td>data C1</td>
                    <td>data C2</td>
                    <td>data C3</td>
                </tr>
          </tbody>
      </table>
  )
};

export default MyTable;
