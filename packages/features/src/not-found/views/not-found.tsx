import { AppLayout } from "@/components/app-layout"
import { MenuBar } from "@/components/menu-bar"
import { useTranslation } from "react-i18next"

type NotFoundViewProps = {
  onGoToDashboard: () => void
  onGoBack: () => void
}

export const NotFoundView = ({
  onGoBack,
  onGoToDashboard,
}: NotFoundViewProps) => {
  const { t } = useTranslation()
  return (
    <AppLayout>
      <MenuBar variant="back" onBackClicked={onGoBack} />
      <div className="flex flex-col flex-1 gap-4 p-4 items-center">
        <div className="flex flex-1 justify-center items-center">
          <div>{t("notFound.couldntFindPage")}</div>
        </div>
        <button
          type="button"
          className="btn btn-primary max-w-48 w-full"
          onClick={onGoToDashboard}
        >
          {t("notFound.goToDashboard")}
        </button>
      </div>
    </AppLayout>
  )
}
