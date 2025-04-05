import ExclamationCircleIcon from '@icons/exclamation-circle-icon'

export default function AssetStatisticsPanelError() {
  return (
    <article>
      <div className="mb-1 flex items-center gap-0.5">
        <ExclamationCircleIcon className="text-danger-500 size-4" />
        <p className="text-danger-500">Error</p>
      </div>
      <h3 className="font-normal">Data unavailable</h3>
    </article>
  )
}
