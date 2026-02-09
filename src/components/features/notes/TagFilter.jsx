import { Button } from '../../ui';

export function TagFilter({ tags, activeTagId, onTagSelect }) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Button
          key={tag.id}
          type="button"
          variant={activeTagId === tag.id ? 'primary' : 'secondary'}
          onClick={() => onTagSelect(tag.id)}
          className="text-sm font-medium"
        >
          {tag.label}
        </Button>
      ))}
    </div>
  );
}
