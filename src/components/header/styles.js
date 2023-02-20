import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
`;

export const List = styled.ul`
  display: flex;
`;
export const NavItem = styled.li`
  padding: 4px;
  margin-right: 4px;
  list-style: none;
`;

export const PageRightCenter = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  padding: 8px;
  background: antiquewhite;
  border-radius: 5px 0 0 5px;
  writing-mode: vertical-lr;
  /* text-orientation: upright; */
`;
