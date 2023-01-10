// ================================================================================
// Code generated by GoFrame CLI tool. DO NOT EDIT.
// You can delete these comments if you wish manually maintain this interface file.
// ================================================================================

package service

import (
	"context"
	"github.com/sagoo-cloud/sagooiot/internal/model"
)

type (
	IDevTSLEvent interface {
		ListEvent(ctx context.Context, in *model.ListTSLEventInput) (out *model.ListTSLEventOutput, err error)
		AddEvent(ctx context.Context, in *model.TSLEventInput) (err error)
		EditEvent(ctx context.Context, in *model.TSLEventInput) (err error)
		DelEvent(ctx context.Context, in *model.DelTSLEventInput) (err error)
	}
	IDevTSLTag interface {
		ListTag(ctx context.Context, in *model.ListTSLTagInput) (out *model.ListTSLTagOutput, err error)
		AddTag(ctx context.Context, in *model.TSLTagInput) (err error)
		EditTag(ctx context.Context, in *model.TSLTagInput) (err error)
		DelTag(ctx context.Context, in *model.DelTSLTagInput) (err error)
	}
	IDevCategory interface {
		Detail(ctx context.Context, id uint) (out *model.ProductCategoryOutput, err error)
		GetNameByIds(ctx context.Context, categoryIds []uint) (names map[uint]string, err error)
		ListForPage(ctx context.Context, page, limit int, name string) (out []*model.ProductCategoryTreeOutput, total int, err error)
		List(ctx context.Context, name string) (out []*model.ProductCategoryTreeOutput, err error)
		Add(ctx context.Context, in *model.AddProductCategoryInput) (err error)
		Edit(ctx context.Context, in *model.EditProductCategoryInput) (err error)
		Del(ctx context.Context, id uint) (err error)
	}
	IDevDeviceLog interface {
		LogType(ctx context.Context) (list []string)
		Search(ctx context.Context, in *model.DeviceLogSearchInput) (out *model.DeviceLogSearchOutput, err error)
	}
	IDevDeviceTag interface {
		Add(ctx context.Context, in *model.AddTagDeviceInput) (err error)
		Edit(ctx context.Context, in *model.EditTagDeviceInput) (err error)
		Del(ctx context.Context, id uint) (err error)
	}
	IDevProduct interface {
		Get(ctx context.Context, key string) (out *model.DetailProductOutput, err error)
		Detail(ctx context.Context, id uint) (out *model.DetailProductOutput, err error)
		GetNameByIds(ctx context.Context, productIds []uint) (names map[uint]string, err error)
		ListForPage(ctx context.Context, in *model.ListForPageInput) (out *model.ListForPageOutput, err error)
		List(ctx context.Context) (list []*model.ProductOutput, err error)
		Add(ctx context.Context, in *model.AddProductInput) (err error)
		Edit(ctx context.Context, in *model.EditProductInput) (err error)
		Del(ctx context.Context, ids []uint) (err error)
		Deploy(ctx context.Context, id uint) (err error)
		Undeploy(ctx context.Context, id uint) (err error)
	}
	IDevTSLDataType interface {
		DataTypeValueList(ctx context.Context) (out *model.DataTypeOutput, err error)
	}
	IDevDevice interface {
		Get(ctx context.Context, key string) (out *model.DeviceOutput, err error)
		Detail(ctx context.Context, id uint) (out *model.DeviceOutput, err error)
		ListForPage(ctx context.Context, in *model.ListDeviceForPageInput) (out *model.ListDeviceForPageOutput, err error)
		List(ctx context.Context, in *model.ListDeviceInput) (list []*model.DeviceOutput, err error)
		Add(ctx context.Context, in *model.AddDeviceInput) (deviceId uint, err error)
		Edit(ctx context.Context, in *model.EditDeviceInput) (err error)
		Del(ctx context.Context, ids []uint) (err error)
		Deploy(ctx context.Context, id uint) (err error)
		Undeploy(ctx context.Context, id uint) (err error)
		Online(ctx context.Context, key string) (err error)
		Offline(ctx context.Context, key string) (err error)
		TotalByProductId(ctx context.Context, productIds []uint) (totals map[uint]int, err error)
		Total(ctx context.Context) (data model.DeviceTotalOutput, err error)
		TotalForMonths(ctx context.Context) (data map[int]int, err error)
		AlarmTotalForMonths(ctx context.Context) (data map[int]int, err error)
		RunStatus(ctx context.Context, id uint) (out *model.DeviceRunStatusOutput, err error)
		GetProperty(ctx context.Context, in *model.DeviceGetPropertyInput) (out *model.DevicePropertiy, err error)
		GetPropertyList(ctx context.Context, in *model.DeviceGetPropertyListInput) (out *model.DeviceGetPropertyListOutput, err error)
	}
	IDevTSLFunction interface {
		ListFunction(ctx context.Context, in *model.ListTSLFunctionInput) (out *model.ListTSLFunctionOutput, err error)
		AddFunction(ctx context.Context, in *model.TSLFunctionAddInput) (err error)
		EditFunction(ctx context.Context, in *model.TSLFunctionAddInput) (err error)
		DelFunction(ctx context.Context, in *model.DelTSLFunctionInput) (err error)
	}
	IDevTSLProperty interface {
		ListProperty(ctx context.Context, in *model.ListTSLPropertyInput) (out *model.ListTSLPropertyOutput, err error)
		AllProperty(ctx context.Context, key string) (list []model.TSLProperty, err error)
		AddProperty(ctx context.Context, in *model.TSLPropertyInput) (err error)
		EditProperty(ctx context.Context, in *model.TSLPropertyInput) (err error)
		DelProperty(ctx context.Context, in *model.DelTSLPropertyInput) (err error)
	}
)

var (
	localDevCategory    IDevCategory
	localDevDeviceLog   IDevDeviceLog
	localDevDeviceTag   IDevDeviceTag
	localDevProduct     IDevProduct
	localDevTSLDataType IDevTSLDataType
	localDevTSLEvent    IDevTSLEvent
	localDevTSLTag      IDevTSLTag
	localDevDevice      IDevDevice
	localDevTSLFunction IDevTSLFunction
	localDevTSLProperty IDevTSLProperty
)

func DevTSLProperty() IDevTSLProperty {
	if localDevTSLProperty == nil {
		panic("implement not found for interface IDevTSLProperty, forgot register?")
	}
	return localDevTSLProperty
}

func RegisterDevTSLProperty(i IDevTSLProperty) {
	localDevTSLProperty = i
}

func DevDevice() IDevDevice {
	if localDevDevice == nil {
		panic("implement not found for interface IDevDevice, forgot register?")
	}
	return localDevDevice
}

func RegisterDevDevice(i IDevDevice) {
	localDevDevice = i
}

func DevTSLFunction() IDevTSLFunction {
	if localDevTSLFunction == nil {
		panic("implement not found for interface IDevTSLFunction, forgot register?")
	}
	return localDevTSLFunction
}

func RegisterDevTSLFunction(i IDevTSLFunction) {
	localDevTSLFunction = i
}

func DevDeviceTag() IDevDeviceTag {
	if localDevDeviceTag == nil {
		panic("implement not found for interface IDevDeviceTag, forgot register?")
	}
	return localDevDeviceTag
}

func RegisterDevDeviceTag(i IDevDeviceTag) {
	localDevDeviceTag = i
}

func DevProduct() IDevProduct {
	if localDevProduct == nil {
		panic("implement not found for interface IDevProduct, forgot register?")
	}
	return localDevProduct
}

func RegisterDevProduct(i IDevProduct) {
	localDevProduct = i
}

func DevTSLDataType() IDevTSLDataType {
	if localDevTSLDataType == nil {
		panic("implement not found for interface IDevTSLDataType, forgot register?")
	}
	return localDevTSLDataType
}

func RegisterDevTSLDataType(i IDevTSLDataType) {
	localDevTSLDataType = i
}

func DevTSLEvent() IDevTSLEvent {
	if localDevTSLEvent == nil {
		panic("implement not found for interface IDevTSLEvent, forgot register?")
	}
	return localDevTSLEvent
}

func RegisterDevTSLEvent(i IDevTSLEvent) {
	localDevTSLEvent = i
}

func DevTSLTag() IDevTSLTag {
	if localDevTSLTag == nil {
		panic("implement not found for interface IDevTSLTag, forgot register?")
	}
	return localDevTSLTag
}

func RegisterDevTSLTag(i IDevTSLTag) {
	localDevTSLTag = i
}

func DevCategory() IDevCategory {
	if localDevCategory == nil {
		panic("implement not found for interface IDevCategory, forgot register?")
	}
	return localDevCategory
}

func RegisterDevCategory(i IDevCategory) {
	localDevCategory = i
}

func DevDeviceLog() IDevDeviceLog {
	if localDevDeviceLog == nil {
		panic("implement not found for interface IDevDeviceLog, forgot register?")
	}
	return localDevDeviceLog
}

func RegisterDevDeviceLog(i IDevDeviceLog) {
	localDevDeviceLog = i
}