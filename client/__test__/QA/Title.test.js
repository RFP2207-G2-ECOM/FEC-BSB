import renderer from 'react-test-renderer';
import Title from '../../src/components/QA/Title.jsx';

 it('Verify that title text is correct', () => {
  const component = renderer.create(
    <Title />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.children[0]).toEqual('QUESTIONS & ANSWERS');
  expect(tree.props.className).toEqual('qa-title');
  expect(tree.type).toEqual('div');
});
