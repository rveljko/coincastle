import DatabaseOffIcon from '@icons/database-off-icon'

export default function NotEnoughChartEataError() {
  return (
    <div className="flex size-full items-center justify-center">
      <article className="max-w-max p-2">
        <DatabaseOffIcon className="text-danger-500 mx-auto mb-2 size-16" />
        <h3 className="mx-auto mb-1 max-w-66 text-center">
          Not Enough <br /> Data to Display
        </h3>
        <p className="text-center">
          Please choose a different <br /> time range to view the chart
        </p>
      </article>
    </div>
  )
}
