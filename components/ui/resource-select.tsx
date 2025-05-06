import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const RESOURCES = [
  { id: 'gold', label: 'Gold', description: 'Precious metal deposits' },
  { id: 'zinc', label: 'Zinc', description: 'Base metal concentrations' },
  { id: 'copper', label: 'Copper', description: 'Copper ore deposits' },
  { id: 'lithium', label: 'Lithium', description: 'Lithium-rich formations' },
  { id: 'uranium', label: 'Uranium', description: 'Radioactive mineral deposits' },
  { id: 'rare-earth', label: 'Rare Earth Elements', description: 'Critical mineral concentrations' },
]

interface ResourceSelectProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedResources: string[]
  onResourceChange: (resources: string[]) => void
  onConfirm: () => void
}

export function ResourceSelect({
  open,
  onOpenChange,
  selectedResources,
  onResourceChange,
  onConfirm,
}: ResourceSelectProps) {
  const handleResourceToggle = (resourceId: string) => {
    if (selectedResources.includes(resourceId)) {
      onResourceChange(selectedResources.filter(id => id !== resourceId))
    } else {
      onResourceChange([...selectedResources, resourceId])
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Resources to Scan</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {RESOURCES.map((resource) => (
            <div key={resource.id} className="flex items-start space-x-3">
              <Checkbox
                id={resource.id}
                checked={selectedResources.includes(resource.id)}
                onCheckedChange={() => handleResourceToggle(resource.id)}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor={resource.id}>{resource.label}</Label>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button onClick={onConfirm} disabled={selectedResources.length === 0}>
            Begin Scan
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}