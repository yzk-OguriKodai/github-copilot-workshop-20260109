import argparse
import json
import os
from datetime import datetime

TODO_FILE = 'todo.json'

def load_todos():
    if not os.path.exists(TODO_FILE):
        print('todo.jsonがありません')
        return {'todo': [], 'done': []}
    with open(TODO_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_todos(data):
    with open(TODO_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def add_task(task):
    data = load_todos()
    now = datetime.now().isoformat()
    data['todo'].append({
        'task': task,
        'createdAt': now
    })
    save_todos(data)
    print(f'追加: {task}')

def list_tasks():
    data = load_todos()
    print('--- 未完了タスク ---')
    for i, task in enumerate(data['todo']):
        print(f"{i}: {task['task']} (作成: {task['createdAt']})")
    print('--- 完了済みタスク ---')
    for i, task in enumerate(data['done']):
        completed = task.get('completedAt', '-')
        print(f"{i}: {task['task']} (作成: {task['createdAt']}, 完了: {completed})")

def done_task(index):
    data = load_todos()
    try:
        task = data['todo'].pop(index)
        task['completedAt'] = datetime.now().isoformat()
        data['done'].append(task)
        save_todos(data)
        print(f"完了: {task['task']}")
    except (IndexError, ValueError):
        print('インデックスが不正です。done <index> で指定してください。')

def delete_task(index, done=False):
    data = load_todos()
    key = 'done' if done else 'todo'
    try:
        task = data[key].pop(index)
        save_todos(data)
        print(f"削除: {task['task']}")
    except (IndexError, ValueError):
        print(f'インデックスが不正です。delete <index> [--done] で指定してください。')

def show_help():
    print('コマンド仕様:')
    print('  add <task>         タスク追加')
    print('  list               タスク一覧表示')
    print('  done <index>       タスク完了')
    print('  delete <index>     タスク削除（未完了）')
    print('  delete <index> --done  タスク削除（完了済み）')

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Todo CLI')
    subparsers = parser.add_subparsers(dest='command')

    parser_add = subparsers.add_parser('add')
    parser_add.add_argument('task', type=str, help='追加するタスク')

    parser_list = subparsers.add_parser('list')

    parser_done = subparsers.add_parser('done')
    parser_done.add_argument('index', type=int, help='完了するタスクのインデックス')

    parser_delete = subparsers.add_parser('delete')
    parser_delete.add_argument('index', type=int, help='削除するタスクのインデックス')
    parser_delete.add_argument('--done', action='store_true', help='完了済みタスクから削除')

    args = parser.parse_args()

    if args.command == 'add':
        add_task(args.task)
    elif args.command == 'list':
        list_tasks()
    elif args.command == 'done':
        done_task(args.index)
    elif args.command == 'delete':
        delete_task(args.index, done=args.done)
    else:
        show_help()
