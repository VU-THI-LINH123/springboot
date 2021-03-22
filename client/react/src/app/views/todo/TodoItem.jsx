import React from "react";
import {
  Card,
  Icon,
  Chip,
  IconButton,
  FormControlLabel,
  Checkbox,
  MenuItem
} from "@material-ui/core";
import {EgretMenu} from "egret";
import { Link } from "react-router-dom";

const TodoItem = ({ todo = { tag: [] }, tagList, updateTodo }) => {
  return (
    <Card className="border-radius-0" elevation={1}>
      <div className="flex flex-middle flex-wrap px-16 py-24">
        <Link
          to={`/todo/list/${todo.id}`}
          className="flex flex-middle flex-grow-1"
        >
          <Icon className="cursor-move">open_with</Icon>
          <div className="ml-16">
            <p className="m-0 mb-12">{todo.title}</p>
            <p className="m-0 mb-12">{todo.note}</p>
            {todo.tag.map((tagId, index) => {
              let tagName = (tagList.find(tag => tag.id === tagId) || {}).name;
              if (!tagName) return null;
              else {
                return (
                  <Chip
                    key={index}
                    className="mr-12"
                    label={tagList.find(tag => tag.id === tagId).name}
                  />
                );
              }
            })}
          </div>
        </Link>

        <div className="flex flex-wrap flex-middle">
          <IconButton
            onClick={() => updateTodo({ ...todo, important: !todo.important })}
          >
            <Icon color={todo.important ? "error" : "inherit"}>
              {todo.important ? "error" : "error_outline"}
            </Icon>
          </IconButton>
          <IconButton
            onClick={() => updateTodo({ ...todo, starred: !todo.starred })}
          >
            <Icon color={todo.starred ? "secondary" : "inherit"}>
              {todo.starred ? "star" : "star_outline"}
            </Icon>
          </IconButton>
          <EgretMenu
            menuButton={
              <IconButton>
                <Icon>more_vert</Icon>
              </IconButton>
            }
          >
            <MenuItem>
              <FormControlLabel
                onChange={() => updateTodo({ ...todo, done: !todo.done })}
                control={<Checkbox checked={todo.done} />}
                label={`Mark As ${todo.done ? "Und" : "D"}one`}
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                onChange={() => updateTodo({ ...todo, read: !todo.read })}
                control={<Checkbox checked={todo.read} />}
                label={`Mark As ${todo.read ? "Unr" : "R"}ead`}
              />
            </MenuItem>
          </EgretMenu>
        </div>
      </div>
    </Card>
  );
};

export default TodoItem;
